package pkg;

import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8000")
@RequestMapping("/csv-services")
public class CSVController {



    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody
    List<ProfileItem> getAllProfiles() {

        return ProfileItemStore.INSTANCE.getItems();
    }

    @RequestMapping(value = "/{" + "id" + "}", method = RequestMethod.GET)
    public @ResponseBody ProfileItem getProfile(@PathVariable("id") long id) {
        return ProfileItemStore.INSTANCE.getItemById(id);
    }

    @RequestMapping(value = "/{" + "id" + "}", method = RequestMethod.DELETE)
    @ResponseStatus(value = HttpStatus.OK)
    public @ResponseBody void deleteProfile(@PathVariable("id") long id) {

        ProfileItemStore.INSTANCE.deleteById(id);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    @ResponseStatus(value = HttpStatus.OK)
    public @ResponseBody void deleteProfiles() {

        ProfileItemStore.INSTANCE.deleteAll();
    }

    @RequestMapping(method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody boolean addProfiles(@Valid @RequestBody List<ProfileItem> profiles, BindingResult result) {

        profiles.forEach(System.out::println);

        return ProfileItemStore.INSTANCE.addItems(profiles);
    }
}