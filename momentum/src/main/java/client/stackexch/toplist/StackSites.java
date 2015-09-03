package client.stackexch.toplist;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class StackSites {
	
	public static final String[] SITES_OF_INTEREST =
		{
		"Stack Overflow",
		"Super User",
		"Programmers",
		"Android Enthusiastas",
		"Information Security",
		"Programming Puzzles & Codegolf",
		"Cryptography",
		"Robotics",
		"Space Exploration",
		"Data Science",
		"Engineering",
		"Theoretical Computer Science",
		"Physics",
		"Computational Science",
		"Computer Science"
		};

	
	public static List<StackSite> filterInterestedSites() {
		throw new Error("NI");
	}
	
	private StackSite[] items;
	
	public StackSite[] getItems() {
		return this.items;
	}

}
