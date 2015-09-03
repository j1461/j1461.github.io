package client.stackexch.toplist;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class StackSite {
	
	private String name;
	
	private String api_site_parameter;
	
	public String getName() {
		return this.name;
	}
	
	public String getApi_site_parameter() {
		return this.api_site_parameter;
	}
}
