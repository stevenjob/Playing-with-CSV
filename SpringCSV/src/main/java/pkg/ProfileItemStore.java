package pkg;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

enum ProfileItemStore {
    INSTANCE;

    private static ArrayList<ProfileItem> list = new ArrayList<>(
            Arrays.asList(new ProfileItem(2010, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12), new ProfileItem(2009, 10, 9, 4, 23, 22, 21, 23, 24, 12, 2, 2, 3))
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
        profiles.forEach(this::addItem);
        return true;
    }
}