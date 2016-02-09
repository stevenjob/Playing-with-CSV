package pkg;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.*;

public class ProfileItem {

    private long id;

    @Digits(message = "{working.days.year.format}", fraction = 0, integer = 4)
    @Min(message = "{working.days.year.min}", value = 2000)
    @JsonProperty("0")
    private int year;

    @Digits(message = "{working.days.format}", fraction = 4, integer = 2)
    @DecimalMax(message = "{working.days.max}", value = "31")
    @DecimalMin(message="{working.days.min}", value="0")
    @NotNull(message = "{working.days.null}")
    @JsonProperty("1")
    private double jan;

    @Digits(message = "{working.days.format}", fraction = 4, integer = 2)
    @DecimalMax(message = "{working.days.max}", value = "29")
    @DecimalMin(message="{working.days.min}", value="0")
    @NotNull(message = "{working.days.null}")
    @JsonProperty("2")
    private double feb;

    @Digits(message = "{working.days.format}", fraction = 4, integer = 2)
    @DecimalMax(message = "{working.days.max}", value = "31")
    @DecimalMin(message="{working.days.min}", value="0")
    @NotNull(message = "{working.days.null}")
    @JsonProperty("3")
    private double mar;

    @Digits(message = "{working.days.format}", fraction = 4, integer = 2)
    @DecimalMax(message = "{working.days.max}", value = "30")
    @DecimalMin(message="{working.days.min}", value="0")
    @NotNull(message = "{working.days.null}")
    @JsonProperty("4")
    private double apr;

    @Digits(message = "{working.days.format}", fraction = 4, integer = 2)
    @DecimalMax(message = "{working.days.max}", value = "31")
    @DecimalMin(message="{working.days.min}", value="0")
    @NotNull(message = "{working.days.null}")
    @JsonProperty("5")
    private double may;

    @Digits(message = "{working.days.format}", fraction = 4, integer = 2)
    @DecimalMax(message = "{working.days.max}", value = "30")
    @DecimalMin(message="{working.days.min}", value="0")
    @NotNull(message = "{working.days.null}")
    @JsonProperty("6")
    private double jun;

    @Digits(message = "{working.days.format}", fraction = 4, integer = 2)
    @DecimalMax(message = "{working.days.max}", value = "31")
    @DecimalMin(message="{working.days.min}", value="0")
    @NotNull(message = "{working.days.null}")
    @JsonProperty("7")
    private double jul;

    @Digits(message = "{working.days.format}", fraction = 4, integer = 2)
    @DecimalMax(message = "{working.days.max}", value = "31")
    @DecimalMin(message="{working.days.min}", value="0")
    @NotNull(message = "{working.days.null}")
    @JsonProperty("8")
    private double aug;

    @Digits(message = "{working.days.format}", fraction = 4, integer = 2)
    @DecimalMax(message = "{working.days.max}", value = "30")
    @DecimalMin(message="{working.days.min}", value="0")
    @NotNull(message = "{working.days.null}")
    @JsonProperty("9")
    private double sep;

    @Digits(message = "{working.days.format}", fraction = 4, integer = 2)
    @DecimalMax(message = "{working.days.max}", value = "31")
    @DecimalMin(message="{working.days.min}", value="0")
    @NotNull(message = "{working.days.null}")
    @JsonProperty("10")
    private double oct;

    @Digits(message = "{working.days.format}", fraction = 4, integer = 2)
    @DecimalMax(message = "{working.days.max}", value = "30")
    @DecimalMin(message="{working.days.min}", value="0")
    @NotNull(message = "{working.days.null}")
    @JsonProperty("11")
    private double nov;

    @Digits(message = "{working.days.format}", fraction = 4, integer = 2)
    @DecimalMax(message = "{working.days.max}", value = "31")
    @DecimalMin(message="{working.days.min}", value="0")
    @NotNull(message = "{working.days.null}")
    @JsonProperty("12")
    private double dec;

    public ProfileItem(int year, double jan, double feb, double mar, double apr, double may, double jun, double jul, double aug, double sep, double oct, double nov, double dec) {
        this.year = year;
        this.jan = jan;
        this.feb = feb;
        this.mar = mar;
        this.apr = apr;
        this.may = may;
        this.jun = jun;
        this.jul = jul;
        this.aug = aug;
        this.sep = sep;
        this.oct = oct;
        this.nov = nov;
        this.dec = dec;
    }

    public ProfileItem() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getJan() {
        return jan;
    }

    public void setJan(double jan) {
        this.jan = jan;
    }

    public double getFeb() {
        return feb;
    }

    public void setFeb(double feb) {
        this.feb = feb;
    }

    public double getMar() {
        return mar;
    }

    public void setMar(double mar) {
        this.mar = mar;
    }

    public double getApr() {
        return apr;
    }

    public void setApr(double apr) {
        this.apr = apr;
    }

    public double getMay() {
        return may;
    }

    public void setMay(double may) {
        this.may = may;
    }

    public double getJun() {
        return jun;
    }

    public void setJun(double jun) {
        this.jun = jun;
    }

    public double getJul() {
        return jul;
    }

    public void setJul(double jul) {
        this.jul = jul;
    }

    public double getAug() {
        return aug;
    }

    public void setAug(double aug) {
        this.aug = aug;
    }

    public double getSep() {
        return sep;
    }

    public void setSep(double sep) {
        this.sep = sep;
    }

    public double getOct() {
        return oct;
    }

    public void setOct(double oct) {
        this.oct = oct;
    }

    public double getNov() {
        return nov;
    }

    public void setNov(double nov) {
        this.nov = nov;
    }

    public double getDec() {
        return dec;
    }

    public void setDec(double dec) {
        this.dec = dec;
    }

    @Override
    public String toString() {
        return "ProfileItem{" +
                "id=" + id +
                ", year=" + year +
                ", jan=" + jan +
                ", feb=" + feb +
                ", mar=" + mar +
                ", apr=" + apr +
                ", may=" + may +
                ", jun=" + jun +
                ", jul=" + jul +
                ", aug=" + aug +
                ", sep=" + sep +
                ", oct=" + oct +
                ", nov=" + nov +
                ", dec=" + dec +
                '}';
    }
}