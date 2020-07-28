package com.galvanize.DSS;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DSSController {
    private final YellowZikaRepository yellowZikaRepository;
    private final RabiesRepository rabiesRepository;
    private final CovidRepository covidRepository;

    public DSSController(
            YellowZikaRepository yellowZikaRepository,
            RabiesRepository rabiesRepository,
            CovidRepository covidRepository
    ) {
        this.yellowZikaRepository = yellowZikaRepository;
        this.rabiesRepository = rabiesRepository;
        this.covidRepository = covidRepository;
    }

    // Web Routes
    @GetMapping("/data/yellow-zika")
    public Iterable<YellowZika> getYellowZikaCache() {
        return this.yellowZikaRepository.findAll2020YellowZikaLocations();
    }

    @GetMapping("/data/rabies")
    public <Optional>Iterable<Rabies> getRabiesCache() {
        return this.rabiesRepository.findAll2020RabiesLocations();
    }

    @GetMapping("/data/covid")
    public Iterable<Covid> getCovidCache() {
        return this.covidRepository.findAll();
    }


    // Routes to refresh data
    private final DataLoader dataLoader = new DataLoader();

    @GetMapping("/update/yellow-zika")
    public String getYellowZikaData() {
        this.yellowZikaRepository.deleteAll();

        String[] yellowZikaData = this.dataLoader.getYellowZika().split("\n");
        int counter = 0;

        for (int i = 1; i < yellowZikaData.length; i++) {
            try {
                String[] yellowZikaDataPoint = yellowZikaData[i].replaceAll("\"","").split(",");
                YellowZika dataPoint = new YellowZika();
                dataPoint.setReporting_area(yellowZikaDataPoint[0]);
                dataPoint.setMmwr_year(yellowZikaDataPoint[1]);
                dataPoint.setMmwr_week(yellowZikaDataPoint[2]);
                dataPoint.setYellow_fever_current_week(yellowZikaDataPoint[3]);
                dataPoint.setYellow_fever_current_week_1(yellowZikaDataPoint[4]);
                dataPoint.setYellow_fever_previous_52(yellowZikaDataPoint[5]);
                dataPoint.setYellow_fever_previous_52_1(yellowZikaDataPoint[6]);
                dataPoint.setYellow_fever_cum_2020(yellowZikaDataPoint[7]);
                dataPoint.setYellow_fever_cum_2020_flag(yellowZikaDataPoint[8]);
                dataPoint.setYellow_fever_cum_2019(yellowZikaDataPoint[9]);
                dataPoint.setYellow_fever_cum_2019_flag(yellowZikaDataPoint[10]);
                dataPoint.setZika_virus_disease_non(yellowZikaDataPoint[11]);
                dataPoint.setZika_virus_disease_non_1(yellowZikaDataPoint[12]);
                dataPoint.setZika_virus_disease_non_2(yellowZikaDataPoint[13]);
                dataPoint.setZika_virus_disease_non_3(yellowZikaDataPoint[14]);
                dataPoint.setZika_virus_disease_non_4(yellowZikaDataPoint[15]);
                dataPoint.setZika_virus_disease_non_5(yellowZikaDataPoint[16]);
                dataPoint.setZika_virus_disease_non_6(yellowZikaDataPoint[17]);
                dataPoint.setZika_virus_disease_non_7(yellowZikaDataPoint[18]);
                dataPoint.setLocation_1(yellowZikaDataPoint[19]);
                dataPoint.setLocation_2(yellowZikaDataPoint[20]);
                dataPoint.setReporting_area_sort(yellowZikaDataPoint[21]);
                dataPoint.setGeocoded_column(yellowZikaDataPoint[22]);
    
                this.yellowZikaRepository.save(dataPoint);
                counter++;
            } catch (Exception e) {
                System.out.println(e);
            }
        }
        return "Processed " + counter + " records";
    }

    @GetMapping("/update/rabies")
    public String rabies() {
        this.rabiesRepository.deleteAll();

        String[] rabiesData = this.dataLoader.getRabies().split("\n");
        int counter = 0;

        for (int i = 1; i < rabiesData.length; i++) {
            try {
                String[] rabiesDataPoint = rabiesData[i].replaceAll("\"","").split(",");
                Rabies dataPoint = new Rabies();
                dataPoint.setReporting_area(rabiesDataPoint[0]);
                dataPoint.setMmwr_year(rabiesDataPoint[1]);
                dataPoint.setMmwr_week(rabiesDataPoint[2]);
                dataPoint.setRabies_animal_current_week(rabiesDataPoint[3]);
                dataPoint.setRabies_animal_current_week_1(rabiesDataPoint[4]);
                dataPoint.setRabies_animal_previous_52(rabiesDataPoint[5]);
                dataPoint.setRabies_animal_previous_52_1(rabiesDataPoint[6]);
                dataPoint.setRabies_animal_cum_2020(rabiesDataPoint[7]);
                dataPoint.setRabies_animal_cum_2020_flag(rabiesDataPoint[8]);
                dataPoint.setRabies_animal_cum_2019(rabiesDataPoint[9]);
                dataPoint.setRabies_animal_cum_2019_flag(rabiesDataPoint[10]);
                dataPoint.setRabies_human_current_week(rabiesDataPoint[11]);
                dataPoint.setRabies_human_current_week_1(rabiesDataPoint[12]);
                dataPoint.setRabies_human_previous_52(rabiesDataPoint[13]);
                dataPoint.setRabies_human_previous_52_1(rabiesDataPoint[14]);
                dataPoint.setRabies_human_cum_2020(rabiesDataPoint[15]);
                dataPoint.setRabies_human_cum_2020_flag(rabiesDataPoint[16]);
                dataPoint.setRabies_human_cum_2019(rabiesDataPoint[17]);
                dataPoint.setRabies_human_cum_2019_flag(rabiesDataPoint[18]);
                dataPoint.setLocation_1(rabiesDataPoint[19]);
                dataPoint.setLocation_2(rabiesDataPoint[20]);
                dataPoint.setReporting_area_sort(rabiesDataPoint[21]);
                dataPoint.setGeocoded_column(rabiesDataPoint[22]);
                
                this.rabiesRepository.save(dataPoint);
                counter++;
            } catch (Exception e) {
                System.out.println(e);
            }
        }
        return "Processed " + counter + " records";
    }

    @GetMapping("/update/covid")
    public String covid() {
        this.covidRepository.deleteAll();

        String[] covidData = this.dataLoader.getCovid().split("\n");
        int counter = 0;

        for (int i = 1; i < covidData.length; i++) {
            try {
                String[] covidDataPoint = covidData[i].replaceAll("\"","").split(",");
                Covid dataPoint = new Covid();
                dataPoint.setSubmission_date(covidDataPoint[0]);
                dataPoint.setState(covidDataPoint[1]);
                dataPoint.setTot_cases(covidDataPoint[2]);
                dataPoint.setConf_cases(covidDataPoint[3]);
                dataPoint.setProb_cases(covidDataPoint[4]);
                dataPoint.setNew_case(covidDataPoint[5]);
                dataPoint.setPnew_case(covidDataPoint[6]);
                dataPoint.setTot_death(covidDataPoint[7]);
                dataPoint.setConf_death(covidDataPoint[8]);
                dataPoint.setProb_death(covidDataPoint[9]);
                dataPoint.setNew_death(covidDataPoint[10]);
                dataPoint.setPnew_death(covidDataPoint[11]);
                dataPoint.setCreated_at(covidDataPoint[12]);
                dataPoint.setConsent_cases(covidDataPoint[13]);
                dataPoint.setConsent_deaths(covidDataPoint[14]);
                
                this.covidRepository.save(dataPoint);
                counter++;
            } catch (Exception e) {
                System.out.println(e);
            }
        }
        return "Processed " + counter + " records";
    }
}
