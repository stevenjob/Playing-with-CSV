package pkg;

import java.util.ArrayList;
import java.util.List;

public class ProfileItemStore {
    private static ArrayList<ProfileItem> list = new ArrayList<>();

    public static int addItem(ProfileItem item) {
        list.add(item);
        return list.indexOf(item);
    }

    public static List<ProfileItem> getItems() {
        return list;
    }

    public static ProfileItem getItemById(long id) {
        return null;
    }

    public static void deleteById(long id) {
    }

    public static boolean addItems(List<ProfileItem> profiles) {
        return false;
    }
}
