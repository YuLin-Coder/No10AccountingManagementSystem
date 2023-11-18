package com.biyeseng.vo;	
	
import javax.persistence.Column;	
import javax.persistence.Entity;	
import javax.persistence.GeneratedValue;	
import javax.persistence.Id;	
import javax.persistence.Table;	
import org.hibernate.annotations.GenericGenerator;	
	
/**
 * 
 * @author biyeseng
 * @company www.baidu.com
 *
 */
@Entity	
@Table(name = "user")	
public class User {	
	
	/** serialVersionUID */	
	protected static final long serialVersionUID = -1L;	
	
	public User() {	
	
	}	
	
	@Id	
	@GeneratedValue(generator = "generator")	
	@GenericGenerator(name = "generator", strategy = "identity")	
	@Column(name = "ID")	
	private Long id;	
	@Column(name = "NAME")	
	private String name;
	@Column(name = "SEX")	
	private String sex;
	@Column(name = "AGE")	
	private String age;
	@Column(name = "PASS")	
	private String pass;
	
	@Column(name = "TEL")	
	private String tel;
	@Column(name = "RNAME")	
	private String rname;
	@Column(name = "ADDDATE")	
	private String adddate;
	
		
		
	
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

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

 
	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getRname() {
		return rname;
	}

	public void setRname(String rname) {
		this.rname = rname;
	}

	public String getAdddate() {
		return adddate;
	}

	public void setAdddate(String adddate) {
		this.adddate = adddate;
	}	
	
	
		
		
	
}	
