package pkg;

import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/csv-services")
public class CSVController {

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody
    List<ProfileItem> getAllWorkingDaysProfiles() {

        return ProfileItemStore.getItems();
    }

    @RequestMapping(value = "/{" + "id" + "}", method = RequestMethod.GET)
    public @ResponseBody ProfileItem getWorkingDaysProfile(@PathVariable("id") long id) {
        return ProfileItemStore.getItemById(id);
    }


    @RequestMapping(value = "/{" + "id" + "}", method = RequestMethod.DELETE)
    @ResponseStatus(value = HttpStatus.OK)
    public @ResponseBody void deleteWorkingDaysProfile(@PathVariable("id") long id) {

        ProfileItemStore.deleteById(id);
    }

    @RequestMapping(method = RequestMethod.POST, consumes = "application/json")
    public @ResponseBody boolean addWorkingDaysProfiles(@Valid @RequestBody List<ProfileItem> profiles, BindingResult result) {

        profiles.forEach(System.out::println);

        return ProfileItemStore.addItems(profiles);
    }
}