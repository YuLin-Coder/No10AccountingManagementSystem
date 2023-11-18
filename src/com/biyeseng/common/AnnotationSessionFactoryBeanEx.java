package com.biyeseng.common;

import com.mchange.v1.lang.ClassUtils;
import org.apache.log4j.Logger;
import org.apache.oro.text.regex.*;
import org.hibernate.HibernateException;
import org.hibernate.cfg.AnnotationConfiguration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.core.type.classreading.CachingMetadataReaderFactory;
import org.springframework.core.type.classreading.MetadataReader;
import org.springframework.core.type.classreading.MetadataReaderFactory;
import org.springframework.orm.hibernate3.annotation.AnnotationSessionFactoryBean;
import org.springframework.util.CollectionUtils;

import javax.persistence.Entity;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
@SuppressWarnings("unchecked")
public class AnnotationSessionFactoryBeanEx extends AnnotationSessionFactoryBean {
	private static final Logger logger = Logger.getLogger(AnnotationSessionFactoryBeanEx.class);

	/**
	 * The locations of the hibernate enity class files. They are often some of
	 * the string with Sping-style resource. A ".class" subfix can make the
	 * scaning more precise.
	 * <p>
	 * example:
	 * 
	 * <pre>
	 * classpath*:com/systop/** /model/*.class
	 * </pre>
	 */
	private String[] annotatedClassesLocations;

	/**
	 * Which classes are not included in the session. They are some of the
	 * regular expression.
	 */
	private String[] excludedClassesRegexPatterns;

	/**
	 * @param annotatedClassesLocations
	 *        the annotatedClassesLocations to set
	 */
	public void setAnnotatedClassesLocations(String[] annotatedClassesLocations) {
		this.annotatedClassesLocations = annotatedClassesLocations;
	}

	/**
	 * @see AnnotationSessionFactoryBean#postProcessAnnotationConfiguration(org.hibernate.cfg.AnnotationConfiguration)
	 */
	@Override
	protected void postProcessAnnotationConfiguration(AnnotationConfiguration config) throws HibernateException {
		Set<Class> annClasses = scanAnnotatedClasses(); // Scan enity classes.
		// Add entity classes to the configuration.
		if(!CollectionUtils.isEmpty(annClasses)) {
			for(Class annClass : annClasses) {
				config.addAnnotatedClass(annClass);
			}
		}
	}

	/**
	 * Scan annotated hibernate classes in the locations.
	 * 
	 * @return Set of the annotated classes, if no matched class, return empty
	 *         Set.
	 */
	private Set<Class> scanAnnotatedClasses() {
		ResourcePatternResolver resourcePatternResolver = new PathMatchingResourcePatternResolver();
		MetadataReaderFactory metadataReaderFactory = new CachingMetadataReaderFactory(resourcePatternResolver);
		Set<Class> annotatedClasses = new HashSet<Class>();
		if(annotatedClassesLocations != null) {
			try {
				for(String annClassesLocation : annotatedClassesLocations) {
					// Resolve the resources
					Resource[] resources = resourcePatternResolver.getResources(annClassesLocation);
					for(Resource resource : resources) {
						MetadataReader metadataReader = metadataReaderFactory.getMetadataReader(resource);
						String className = metadataReader.getClassMetadata().getClassName();
						// If the class is hibernate enity class, and it does
						// not match the excluded class patterns.
						if(isEntityClass(metadataReader) && !isExcludedClass(className)) {
							Class clazz = ClassUtils.forName(className);
							annotatedClasses.add(clazz);
							logger.debug("A entity class has been found. \n({})" + clazz.getName());
						}
					}

				}
			}
			catch(IOException e) {
				logger.error("I/O failure during classpath scanning, ({})" + e.getMessage());
				e.printStackTrace();
			}
			catch(ClassNotFoundException e) {
				logger.error("Class not found, ({})" + e.getMessage());
				e.printStackTrace();
			}
			catch(LinkageError e) {
				logger.error("LinkageError ({})" + e.getMessage());
				e.printStackTrace();
			}
		}

		return annotatedClasses;
	}

	/**
	 * @return True if the given MetadataReader shows that the class is
	 *         annotated by <code>javax.persistence.Enity</code>
	 */
	private boolean isEntityClass(MetadataReader metadataReader) {
		Set<String> annTypes = metadataReader.getAnnotationMetadata().getAnnotationTypes();
		if(CollectionUtils.isEmpty(annTypes)) {
			return false;
		}

		return annTypes.contains(Entity.class.getName());
	}

	/**
	 * @return True if the given class name match the excluded class patterns.
	 */
	private boolean isExcludedClass(String className) {
		if(excludedClassesRegexPatterns == null) { // All class is included.
			return false;
		}

		PatternCompiler compiler = new Perl5Compiler();
		PatternMatcher matcher = new Perl5Matcher();
		try {
			for(String regex : excludedClassesRegexPatterns) { // Test each
				// patterns.
				logger.debug("Pattern is: {}" + regex);
				Pattern pattern = compiler.compile(regex);
				if(matcher.matches(className, pattern)) {
					logger.debug("class [{}], matches [{}], so it is excluded." + className + pattern.getPattern());
					return true;
				}
			}
		}
		catch(MalformedPatternException e) {
			logger.warn("Malformed pattern [{}]" + e.getMessage());
		}

		return false;
	}

	/**
	 * @param
	 *        the exculdePatterns to set
	 */
	public void setExcludedClassesRegexPatterns(String[] excludedClassesRegexPatterns) {
		this.excludedClassesRegexPatterns = excludedClassesRegexPatterns;
	}
}
