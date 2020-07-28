package com.galvanize.DSS;

import com.fasterxml.jackson.annotation.JsonInclude;

import javax.persistence.*;

@Entity
@Table(name = "covid")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Covid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String submission_date;
    private String state;
    private String tot_cases;
    private String conf_cases;
    private String prob_cases;
    private String new_case;
    private String pnew_case;
    private String tot_death;
    private String conf_death;
    private String prob_death;
    private String new_death;
    private String pnew_death;
    private String created_at;
    private String consent_cases;
    private String consent_deaths;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSubmission_date() {
        return submission_date;
    }

    public void setSubmission_date(String submission_date) {
        this.submission_date = submission_date;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getTot_cases() {
        return tot_cases;
    }

    public void setTot_cases(String tot_cases) {
        this.tot_cases = tot_cases;
    }

    public String getConf_cases() {
        return conf_cases;
    }

    public void setConf_cases(String conf_cases) {
        this.conf_cases = conf_cases;
    }

    public String getProb_cases() {
        return prob_cases;
    }

    public void setProb_cases(String prob_cases) {
        this.prob_cases = prob_cases;
    }

    public String getNew_case() {
        return new_case;
    }

    public void setNew_case(String new_case) {
        this.new_case = new_case;
    }

    public String getPnew_case() {
        return pnew_case;
    }

    public void setPnew_case(String pnew_case) {
        this.pnew_case = pnew_case;
    }

    public String getTot_death() {
        return tot_death;
    }

    public void setTot_death(String tot_death) {
        this.tot_death = tot_death;
    }

    public String getConf_death() {
        return conf_death;
    }

    public void setConf_death(String conf_death) {
        this.conf_death = conf_death;
    }

    public String getProb_death() {
        return prob_death;
    }

    public void setProb_death(String prob_death) {
        this.prob_death = prob_death;
    }

    public String getNew_death() {
        return new_death;
    }

    public void setNew_death(String new_death) {
        this.new_death = new_death;
    }

    public String getPnew_death() {
        return pnew_death;
    }

    public void setPnew_death(String pnew_death) {
        this.pnew_death = pnew_death;
    }

    public String getCreated_at() {
        return created_at;
    }

    public void setCreated_at(String created_at) {
        this.created_at = created_at;
    }

    public String getConsent_cases() {
        return consent_cases;
    }

    public void setConsent_cases(String consent_cases) {
        this.consent_cases = consent_cases;
    }

    public String getConsent_deaths() {
        return consent_deaths;
    }

    public void setConsent_deaths(String consent_deaths) {
        this.consent_deaths = consent_deaths;
    }
}
