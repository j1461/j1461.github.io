package _dummy_test_pkg;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
    	
    	RestTemplate restTemplate = new RestTemplate();
        //Page page = restTemplate.getForObject("http://graph.facebook.com/pivotalsoftware", Page.class);
    	Page page = restTemplate.getForObject(
			"https://api.stackexchange.com/2.2/sites", Page.class);
        /*System.out.println("Name:    " + page.getName());
        System.out.println("About:   " + page.getAbout());
        System.out.println("Phone:   " + page.getPhone());
        System.out.println("Website: " + page.getWebsite());*/
    	
        return new Greeting(counter.incrementAndGet(),
                            String.format(template, name));
    }
}
