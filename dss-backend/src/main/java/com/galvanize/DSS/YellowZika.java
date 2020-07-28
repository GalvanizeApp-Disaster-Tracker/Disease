package com.galvanize.DSS;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;

import javax.persistence.*;

@Entity
@Table(name = "yellowzika")
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonFormat()
public class YellowZika {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String reporting_area;
    private String mmwr_year;
    private String mmwr_week;
    private String yellow_fever_current_week;
    private String yellow_fever_current_week_1;
    private String yellow_fever_previous_52;
    private String yellow_fever_previous_52_1;
    private String yellow_fever_cum_2020;
    private String yellow_fever_cum_2020_flag;
    private String yellow_fever_cum_2019;
    private String yellow_fever_cum_2019_flag;
    private String zika_virus_disease_non;
    private String zika_virus_disease_non_1;
    private String zika_virus_disease_non_2;
    private String zika_virus_disease_non_3;
    private String zika_virus_disease_non_4;
    private String zika_virus_disease_non_5;
    private String zika_virus_disease_non_6;
    private String zika_virus_disease_non_7;
    private String location_1;
    private String location_2;
    private String reporting_area_sort;
    private String geocoded_column;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReporting_area() {
        return reporting_area;
    }

    public void setReporting_area(String reporting_area) {
        this.reporting_area = reporting_area;
    }

    public String getMmwr_year() {
        return mmwr_year;
    }

    public void setMmwr_year(String mmwr_year) {
        this.mmwr_year = mmwr_year;
    }

    public String getMmwr_week() {
        return mmwr_week;
    }

    public void setMmwr_week(String mmwr_week) {
        this.mmwr_week = mmwr_week;
    }

    public String getYellow_fever_current_week() {
        return yellow_fever_current_week;
    }

    public void setYellow_fever_current_week(String yellow_fever_current_week) {
        this.yellow_fever_current_week = yellow_fever_current_week;
    }

    public String getYellow_fever_current_week_1() {
        return yellow_fever_current_week_1;
    }

    public void setYellow_fever_current_week_1(String yellow_fever_current_week_1) {
        this.yellow_fever_current_week_1 = yellow_fever_current_week_1;
    }

    public String getYellow_fever_previous_52() {
        return yellow_fever_previous_52;
    }

    public void setYellow_fever_previous_52(String yellow_fever_previous_52) {
        this.yellow_fever_previous_52 = yellow_fever_previous_52;
    }

    public String getYellow_fever_previous_52_1() {
        return yellow_fever_previous_52_1;
    }

    public void setYellow_fever_previous_52_1(String yellow_fever_previous_52_1) {
        this.yellow_fever_previous_52_1 = yellow_fever_previous_52_1;
    }

    public String getYellow_fever_cum_2020() {
        return yellow_fever_cum_2020;
    }

    public void setYellow_fever_cum_2020(String yellow_fever_cum_2020) {
        this.yellow_fever_cum_2020 = yellow_fever_cum_2020;
    }

    public String getYellow_fever_cum_2020_flag() {
        return yellow_fever_cum_2020_flag;
    }

    public void setYellow_fever_cum_2020_flag(String yellow_fever_cum_2020_flag) {
        this.yellow_fever_cum_2020_flag = yellow_fever_cum_2020_flag;
    }

    public String getYellow_fever_cum_2019() {
        return yellow_fever_cum_2019;
    }

    public void setYellow_fever_cum_2019(String yellow_fever_cum_2019) {
        this.yellow_fever_cum_2019 = yellow_fever_cum_2019;
    }

    public String getYellow_fever_cum_2019_flag() {
        return yellow_fever_cum_2019_flag;
    }

    public void setYellow_fever_cum_2019_flag(String yellow_fever_cum_2019_flag) {
        this.yellow_fever_cum_2019_flag = yellow_fever_cum_2019_flag;
    }

    public String getZika_virus_disease_non() {
        return zika_virus_disease_non;
    }

    public void setZika_virus_disease_non(String zika_virus_disease_non) {
        this.zika_virus_disease_non = zika_virus_disease_non;
    }

    public String getZika_virus_disease_non_1() {
        return zika_virus_disease_non_1;
    }

    public void setZika_virus_disease_non_1(String zika_virus_disease_non_1) {
        this.zika_virus_disease_non_1 = zika_virus_disease_non_1;
    }

    public String getZika_virus_disease_non_2() {
        return zika_virus_disease_non_2;
    }

    public void setZika_virus_disease_non_2(String zika_virus_disease_non_2) {
        this.zika_virus_disease_non_2 = zika_virus_disease_non_2;
    }

    public String getZika_virus_disease_non_3() {
        return zika_virus_disease_non_3;
    }

    public void setZika_virus_disease_non_3(String zika_virus_disease_non_3) {
        this.zika_virus_disease_non_3 = zika_virus_disease_non_3;
    }

    public String getZika_virus_disease_non_4() {
        return zika_virus_disease_non_4;
    }

    public void setZika_virus_disease_non_4(String zika_virus_disease_non_4) {
        this.zika_virus_disease_non_4 = zika_virus_disease_non_4;
    }

    public String getZika_virus_disease_non_5() {
        return zika_virus_disease_non_5;
    }

    public void setZika_virus_disease_non_5(String zika_virus_disease_non_5) {
        this.zika_virus_disease_non_5 = zika_virus_disease_non_5;
    }

    public String getZika_virus_disease_non_6() {
        return zika_virus_disease_non_6;
    }

    public void setZika_virus_disease_non_6(String zika_virus_disease_non_6) {
        this.zika_virus_disease_non_6 = zika_virus_disease_non_6;
    }

    public String getZika_virus_disease_non_7() {
        return zika_virus_disease_non_7;
    }

    public void setZika_virus_disease_non_7(String zika_virus_disease_non_7) {
        this.zika_virus_disease_non_7 = zika_virus_disease_non_7;
    }

    public String getLocation_1() {
        return location_1;
    }

    public void setLocation_1(String location_1) {
        this.location_1 = location_1;
    }

    public String getLocation_2() {
        return location_2;
    }

    public void setLocation_2(String location_2) {
        this.location_2 = location_2;
    }

    public String getReporting_area_sort() {
        return reporting_area_sort;
    }

    public void setReporting_area_sort(String reporting_area_sort) {
        this.reporting_area_sort = reporting_area_sort;
    }

    public String getGeocoded_column() {
        return geocoded_column;
    }

    public void setGeocoded_column(String geocoded_column) {
        this.geocoded_column = geocoded_column;
    }
}
