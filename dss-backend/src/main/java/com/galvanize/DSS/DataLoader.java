package com.galvanize.DSS;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class DataLoader {

    private final RestTemplate restTemplate = new RestTemplate();



    public String getYellowZika() {
        return this.restTemplate.getForObject(
                "https://data.cdc.gov/resource/bk9t-cq4b.csv",
                String.class
        );
    }

    public String getRabies() {
        return this.restTemplate.getForObject(
                "https://data.cdc.gov/resource/6kf3-4udg.csv",
                String.class
        );
    }

    public Covid[] getCovid() {
        return this.restTemplate.getForObject(
                "https://data.cdc.gov/resource/9mfq-cb36.json?submission_date=2020-07-25T00:00:00.000",
                Covid[].class
        );
    }
}
