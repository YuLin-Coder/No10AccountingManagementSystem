package com.biyeseng.vo;	
	
import javax.persistence.Column;	
import javax.persistence.Entity;	
import javax.persistence.GeneratedValue;	
import javax.persistence.Id;	
import javax.persistence.Table;	
import javax.persistence.Transient;

import org.hibernate.annotations.GenericGenerator;	
	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
@Entity	
@Table(name = "admin")	
public class Admin {	
	
	/** serialVersionUID */	
	protected static final long serialVersionUID = -1L;	
	
	public Admin() {	
	
	}	
	
	@Id	
	@GeneratedValue(generator = "generator")	
	@GenericGenerator(name = "generator", strategy = "identity")	
	@Column(name = "ID")	
	private Long id;	
	@Column(name = "NAME")	
	private String name;	
	@Column(name = "PASS")	
	private String pass;
	
	@Transient
	private String rname;
	
		
		
	
	/**	
	 * @return Returns the Id.	
	 */	
	public Long getId() {	
		return this.id;	
	}	
	
	/**	
	 * @param id	
	 *            Set the id.	
	 */	
	public void setId(Long id) {	
		this.id = id;	
	}	
	
	/**	
	 * @return Returns the Name.	
	 */	
	public String getName() {	
		return this.name;	
	}	
	
	/**	
	 * @param name	
	 *            Set the name.	
	 */	
	public void setName(String name) {	
		this.name = name;	
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public String getRname() {
		return rname;
	}

	public void setRname(String rname) {
		this.rname = rname;
	}	
	
	
		
		
	
}	
