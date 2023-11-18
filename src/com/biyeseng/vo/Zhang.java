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
@Table(name = "zhang")	
public class Zhang {	
	
	/** serialVersionUID */	
	protected static final long serialVersionUID = -1L;	
	
	public Zhang() {	
	
	}	
	
	@Id	
	@GeneratedValue(generator = "generator")	
	@GenericGenerator(name = "generator", strategy = "identity")	
	@Column(name = "ID")	
	private Long id;	
	@Column(name = "NAME")	
	private String name;
	@Column(name = "USER")	
	private String user;
	@Column(name = "RNAME")	
	private String rname;
	@Column(name = "TYPE")	
	private String type;
	@Column(name = "KIND")	
	private String kind;
	@Column(name = "DATE")	
	private String date;
	@Column(name = "COUNT")	
	private float count=0.0f;
	@Column(name = "YONG")	
	private String yong;
	@Column(name = "INFO")	
	private String info;
	
		
		
	
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

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getRname() {
		return rname;
	}

	public void setRname(String rname) {
		this.rname = rname;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getKind() {
		return kind;
	}

	public void setKind(String kind) {
		this.kind = kind;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public float getCount() {
		return count;
	}

	public void setCount(float count) {
		this.count = count;
	}

	public String getYong() {
		return yong;
	}

	public void setYong(String yong) {
		this.yong = yong;
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}	
	
	
		
		
	
}	
