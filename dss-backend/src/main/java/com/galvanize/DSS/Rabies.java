package com.galvanize.DSS;

import com.fasterxml.jackson.annotation.JsonInclude;

import javax.persistence.*;

@Entity
@Table(name = "rabies")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Rabies {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String reporting_area;
    private String mmwr_year;
    private String mmwr_week;
    private String rabies_animal_current_week;
    private String rabies_animal_current_week_1;
    private String rabies_animal_previous_52;
    private String rabies_animal_previous_52_1;
    private String rabies_animal_cum_2020;
    private String rabies_animal_cum_2020_flag;
    private String rabies_animal_cum_2019;
    private String rabies_animal_cum_2019_flag;
    private String rabies_human_current_week;
    private String rabies_human_current_week_1;
    private String rabies_human_previous_52;
    private String rabies_human_previous_52_1;
    private String rabies_human_cum_2020;
    private String rabies_human_cum_2020_flag;
    private String rabies_human_cum_2019;
    private String rabies_human_cum_2019_flag;
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

    public String getRabies_animal_current_week() {
        return rabies_animal_current_week;
    }

    public void setRabies_animal_current_week(String rabies_animal_current_week) {
        this.rabies_animal_current_week = rabies_animal_current_week;
    }

    public String getRabies_animal_current_week_1() {
        return rabies_animal_current_week_1;
    }

    public void setRabies_animal_current_week_1(String rabies_animal_current_week_1) {
        this.rabies_animal_current_week_1 = rabies_animal_current_week_1;
    }

    public String getRabies_animal_previous_52() {
        return rabies_animal_previous_52;
    }

    public void setRabies_animal_previous_52(String rabies_animal_previous_52) {
        this.rabies_animal_previous_52 = rabies_animal_previous_52;
    }

    public String getRabies_animal_previous_52_1() {
        return rabies_animal_previous_52_1;
    }

    public void setRabies_animal_previous_52_1(String rabies_animal_previous_52_1) {
        this.rabies_animal_previous_52_1 = rabies_animal_previous_52_1;
    }

    public String getRabies_animal_cum_2020() {
        return rabies_animal_cum_2020;
    }

    public void setRabies_animal_cum_2020(String rabies_animal_cum_2020) {
        this.rabies_animal_cum_2020 = rabies_animal_cum_2020;
    }

    public String getRabies_animal_cum_2020_flag() {
        return rabies_animal_cum_2020_flag;
    }

    public void setRabies_animal_cum_2020_flag(String rabies_animal_cum_2020_flag) {
        this.rabies_animal_cum_2020_flag = rabies_animal_cum_2020_flag;
    }

    public String getRabies_animal_cum_2019() {
        return rabies_animal_cum_2019;
    }

    public void setRabies_animal_cum_2019(String rabies_animal_cum_2019) {
        this.rabies_animal_cum_2019 = rabies_animal_cum_2019;
    }

    public String getRabies_animal_cum_2019_flag() {
        return rabies_animal_cum_2019_flag;
    }

    public void setRabies_animal_cum_2019_flag(String rabies_animal_cum_2019_flag) {
        this.rabies_animal_cum_2019_flag = rabies_animal_cum_2019_flag;
    }

    public String getRabies_human_current_week() {
        return rabies_human_current_week;
    }

    public void setRabies_human_current_week(String rabies_human_current_week) {
        this.rabies_human_current_week = rabies_human_current_week;
    }

    public String getRabies_human_current_week_1() {
        return rabies_human_current_week_1;
    }

    public void setRabies_human_current_week_1(String rabies_human_current_week_1) {
        this.rabies_human_current_week_1 = rabies_human_current_week_1;
    }

    public String getRabies_human_previous_52() {
        return rabies_human_previous_52;
    }

    public void setRabies_human_previous_52(String rabies_human_previous_52) {
        this.rabies_human_previous_52 = rabies_human_previous_52;
    }

    public String getRabies_human_previous_52_1() {
        return rabies_human_previous_52_1;
    }

    public void setRabies_human_previous_52_1(String rabies_human_previous_52_1) {
        this.rabies_human_previous_52_1 = rabies_human_previous_52_1;
    }

    public String getRabies_human_cum_2020() {
        return rabies_human_cum_2020;
    }

    public void setRabies_human_cum_2020(String rabies_human_cum_2020) {
        this.rabies_human_cum_2020 = rabies_human_cum_2020;
    }

    public String getRabies_human_cum_2020_flag() {
        return rabies_human_cum_2020_flag;
    }

    public void setRabies_human_cum_2020_flag(String rabies_human_cum_2020_flag) {
        this.rabies_human_cum_2020_flag = rabies_human_cum_2020_flag;
    }

    public String getRabies_human_cum_2019() {
        return rabies_human_cum_2019;
    }

    public void setRabies_human_cum_2019(String rabies_human_cum_2019) {
        this.rabies_human_cum_2019 = rabies_human_cum_2019;
    }

    public String getRabies_human_cum_2019_flag() {
        return rabies_human_cum_2019_flag;
    }

    public void setRabies_human_cum_2019_flag(String rabies_human_cum_2019_flag) {
        this.rabies_human_cum_2019_flag = rabies_human_cum_2019_flag;
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
