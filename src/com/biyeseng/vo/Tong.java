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
@Table(name = "tong")	
public class Tong {	
	
	/** serialVersionUID */	
	protected static final long serialVersionUID = -1L;	
	
	public Tong() {	
	
	}	
	
	@Id	
	@GeneratedValue(generator = "generator")	
	@GenericGenerator(name = "generator", strategy = "identity")	
	@Column(name = "ID")	
	private Long id;	
	@Column(name = "USER")	
	private String user;
	@Column(name = "TYPE")	
	private String type;	
	@Column(name = "KIND")	
	private String kind;	
	@Column(name = "DATE")	
	private String date;	
	@Column(name = "YEAR")	
	private String year;	
	@Column(name = "MONTH")	
	private String month;	
	@Column(name = "SHOU")	
	private float shou=0.0f;	
	@Column(name = "ZHI")	
	private float zhi=0.0f;	
	
		
		
	
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

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
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

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public float getShou() {
		return shou;
	}

	public void setShou(float shou) {
		this.shou = shou;
	}

	public float getZhi() {
		return zhi;
	}

	public void setZhi(float zhi) {
		this.zhi = zhi;
	}	
	
	 
	
	
		
		
	
}	
