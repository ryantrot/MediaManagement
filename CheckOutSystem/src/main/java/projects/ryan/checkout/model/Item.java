package projects.ryan.checkout.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "inventory")
public class Item implements Serializable{
	
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="inv_id")
	private Long id;
	
	@Column(name ="inv_preacher")
	private String name;
	
	@Column(name = "inv_event_name")
	private String event;
	
	@Column(name ="inv_disk_cd")
	private String cd_disk;
	
	@Column(name ="inv_disk_dvd")
	private String dvd_disk;
	
	@Column(name = "quantity_cd")
	private int cd_quantity;
	
	@Column(name = "quantity_dvd")
	private int dvd_quantity;

	public Item() {
		this(0L, "Hornsby", "Sunday Morning Service", "CD", "DVD", 0, 0 );
	}

	public Item(Long id, String name, String event, String cd_disk, String dvd_disk, int cd_quantity,
			int dvd_quantity) {
		super();
		this.id = id;
		this.name = name;
		this.event = event;
		this.cd_disk = cd_disk;
		this.dvd_disk = dvd_disk;
		this.cd_quantity = cd_quantity;
		this.dvd_quantity = dvd_quantity;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEvent() {
		return event;
	}

	public void setEvent(String event) {
		this.event = event;
	}

	public String getCd_disk() {
		return cd_disk;
	}

	public void setCd_disk(String cd_disk) {
		this.cd_disk = cd_disk;
	}

	public String getDvd_disk() {
		return dvd_disk;
	}

	public void setDvd_disk(String dvd_disk) {
		this.dvd_disk = dvd_disk;
	}

	public int getCd_quantity() {
		return cd_quantity;
	}

	public void setCd_quantity(int cd_quantity) {
		this.cd_quantity = cd_quantity;
	}

	public int getDvd_quantity() {
		return dvd_quantity;
	}

	public void setDvd_quantity(int dvd_quantity) {
		this.dvd_quantity = dvd_quantity;
	}

	@Override
	public String toString() {
		return "Item [id=" + id + ", name=" + name + ", event=" + event + ", cd_disk=" + cd_disk + ", dvd_disk="
				+ dvd_disk + ", cd_quantity=" + cd_quantity + ", dvd_quantity=" + dvd_quantity + "]";
	}
	
	
	
	
	
}
