package client.common;

import org.springframework.web.client.RestTemplate;

import client.stackexch.toplist.StackSite;
import client.stackexch.toplist.StackSites;

public class SiteAggregator {
	
	public void foo() {
		RestTemplate restTemplate = new RestTemplate();
		StackSites sss = restTemplate.getForObject(
			"https://api.stackexchange.com/2.2/sites",
			StackSites.class);
		
		StackSite[] a = sss.getItems();
	}

}
