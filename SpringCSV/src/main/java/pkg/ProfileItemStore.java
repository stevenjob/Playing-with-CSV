package pkg;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

enum ProfileItemStore {
    INSTANCE;

    private static ArrayList<ProfileItem> list = new ArrayList<>(
            Arrays.asList(new ProfileItem(2015, 20, 20, 20, 2, 2, 2, 2, 2, 12, 2, 2, 3), new ProfileItem(2014, 10, 9, 4, 23, 22, 21, 23, 24, 12, 2, 2, 3))
    );

    public int addItem(ProfileItem item) {
        list.add(item);
        return list.indexOf(item);
    }

    public List<ProfileItem> getItems() {
        return list;
    }

    public ProfileItem getItemById(long id) {
        return null;
    }

    public void deleteById(long id) {

    }

    public boolean addItems(List<ProfileItem> profiles) {
        profiles.forEach(list::add);
        return true;
    }
}