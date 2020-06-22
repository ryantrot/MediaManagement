package projects.ryan.checkout.model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;


@Entity
@Table(name="request")
public class Request implements Serializable {


	private static final long serialVersionUID = 4882676507883059364L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="request_id")
	private Long request_id;
	
	@Column(name="fullname")
	private String fullname;
	
	@Column(name="email")
	private String email;
	
	@Column(name="phone_number")
	private String phone_number;
	
	@Column(name = "name_preacher")
	private String name_preacher;
	
	@Column(name="event_name")
	private String event_name;
	
	@NotNull
	@DateTimeFormat(pattern="MM/dd/yyyy")
	@Column(name="event_date")
	private LocalDate event_date;
	
	@Column(name="disk_type")
	private String disk_type;
	
	@Column(name ="orderstatus")
	private Boolean status;
	
//	public Request() {
//		this(-1L, "Member Name", "Member Email", "XXX-XXX-XXXX", "Name of Preacher", "Sunday Morning Service", LocalDate.parse("01/10/2010"), "CD/DVD", false);
//	}
	
	protected Request() { super();}

	public Request(Long request_id, String fullname, String email, String phone_number, String name_preacher,
			String event_name, LocalDate event_date, String disk_type, Boolean status) {
		super();
		this.request_id = request_id;
		this.fullname = fullname;
		this.email = email;
		this.phone_number = phone_number;
		this.name_preacher = name_preacher;
		this.event_name = event_name;
		this.event_date = event_date;
		this.disk_type = disk_type;
		this.status = status;
	}

	public Long getRequest_id() {
		return request_id;
	}

	public void setRequest_id(Long request_id) {
		this.request_id = request_id;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

	public String getName_preacher() {
		return name_preacher;
	}

	public void setName_preacher(String name_preacher) {
		this.name_preacher = name_preacher;
	}

	public String getEvent_name() {
		return event_name;
	}

	public void setEvent_name(String event_name) {
		this.event_name = event_name;
	}

	public LocalDate getEvent_date() {
		return event_date;
	}

	public void setEvent_date(LocalDate event_date) {
		this.event_date = event_date;
	}

	public String getDisk_type() {
		return disk_type;
	}

	public void setDisk_type(String disk_type) {
		this.disk_type = disk_type;
	}

	public Boolean isStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Request [request_id=" + request_id + ", fullname=" + fullname + ", email=" + email + ", phone_number="
				+ phone_number + ", name_preacher=" + name_preacher + ", event_name=" + event_name + ", event_date="
				+ event_date + ", disk_type=" + disk_type + ", status=" + status + "]";
	}

	
	
	
	

	
	
	
	
}
