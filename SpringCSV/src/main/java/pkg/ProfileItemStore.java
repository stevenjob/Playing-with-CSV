package pkg;


import java.util.ArrayList;
import java.util.List;

enum ProfileItemStore {
    INSTANCE;

    private static ArrayList<ProfileItem> list = new ArrayList<>();

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

    public void deleteAll() {
        list.clear();
    }
}