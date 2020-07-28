package com.galvanize.DSS;

public class GeoCoded {
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double[] getCoordinates() {
        return coordinates;
    }

    public void setCoordinates(double[] coordinates) {
        this.coordinates = coordinates;
    }

    private String type;
    private double[] coordinates;

    @Override
    public String toString() {
        return String.format(
                "%s_%s",
                coordinates[0],
                coordinates[1]
        );
    }
}
