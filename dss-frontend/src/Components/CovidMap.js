import React, { useState } from "react";

import {
  EuiSwitch
} from '@elastic/eui'

import { scaleQuantize } from "d3-scale";

import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

import ReactTooltip from "react-tooltip";

const allStates = [
  { "id": "AL", "val": "01" },
  { "id": "AK", "val": "02" },
  { "id": "AS", "val": "60" },
  { "id": "AZ", "val": "04" },
  { "id": "AR", "val": "05" },
  { "id": "CA", "val": "06" },
  { "id": "CO", "val": "08" },
  { "id": "CT", "val": "09" },
  { "id": "DE", "val": "10" },
  { "id": "DC", "val": "11" },
  { "id": "FL", "val": "12" },
  { "id": "FM", "val": "64" },
  { "id": "GA", "val": "13" },
  { "id": "GU", "val": "66" },
  { "id": "HI", "val": "15" },
  { "id": "ID", "val": "16" },
  { "id": "IL", "val": "17" },
  { "id": "IN", "val": "18" },
  { "id": "IA", "val": "19" },
  { "id": "KS", "val": "20" },
  { "id": "KY", "val": "21" },
  { "id": "LA", "val": "22" },
  { "id": "ME", "val": "23" },
  { "id": "MH", "val": "68" },
  { "id": "MD", "val": "24" },
  { "id": "MA", "val": "25" },
  { "id": "MI", "val": "26" },
  { "id": "MN", "val": "27" },
  { "id": "MS", "val": "28" },
  { "id": "MO", "val": "29" },
  { "id": "MT", "val": "30" },
  { "id": "NE", "val": "31" },
  { "id": "NV", "val": "32" },
  { "id": "NH", "val": "33" },
  { "id": "NJ", "val": "34" },
  { "id": "NM", "val": "35" },
  { "id": "NY", "val": "36" },
  { "id": "NC", "val": "37" },
  { "id": "ND", "val": "38" },
  { "id": "MP", "val": "69" },
  { "id": "OH", "val": "39" },
  { "id": "OK", "val": "40" },
  { "id": "OR", "val": "41" },
  { "id": "PW", "val": "70" },
  { "id": "PA", "val": "42" },
  { "id": "PR", "val": "72" },
  { "id": "RI", "val": "44" },
  { "id": "SC", "val": "45" },
  { "id": "SD", "val": "46" },
  { "id": "TN", "val": "47" },
  { "id": "TX", "val": "48" },
  { "id": "UM", "val": "74" },
  { "id": "UT", "val": "49" },
  { "id": "VT", "val": "50" },
  { "id": "VA", "val": "51" },
  { "id": "VI", "val": "78" },
  { "id": "WA", "val": "53" },
  { "id": "WV", "val": "54" },
  { "id": "WI", "val": "55" },
  { "id": "WY", "val": "56" }
]

const colorScale = scaleQuantize()
  .domain([1, 10])
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618"
  ]);

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const CovidMap = ({
  data,
}) => {
  const [toolTip, setToolTip] = useState("")
  const [deaths, setDeaths] = useState(false)

  return (
    <div>
      <EuiSwitch
        label="Show Deaths"
        checked={deaths}
        onChange={() => { setDeaths(!deaths) }}
      />
      <ComposableMap data-tip="" projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map(geo => {
                if (deaths) {
                  const curMax = Math.max.apply(Math, data.map(function (o) { return o.tot_death; }))
                  const curMin = Math.min.apply(Math, data.map(function (o) { return o.tot_death; }))
                  const curRange = (curMax - curMin)
                  const newRange = (10 - 1)
                  const cur = allStates.find(s => s.val === geo.id)
                  const cases = data.find(s => cur.id === s.state)
                  const newValue = cases ? (((cases.tot_death - curMin) * newRange) / curRange) + 1 : 0
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        const { state, tot_death } = cases;
                        setToolTip(`${state} — ${tot_death}`);
                      }}
                      onMouseLeave={() => {
                        setToolTip("");
                      }}
                      style={{
                        default: {
                          fill: colorScale(newValue),
                          outline: "none"
                        },
                        hover: {
                          fill: "#F53",
                          outline: "none"
                        },
                        pressed: {
                          fill: "#E42",
                          outline: "none"
                        }
                      }}
                    />
                  )
                } else {
                  const curMax = Math.max.apply(Math, data.map(function (o) { return o.tot_cases; }))
                  const curMin = Math.min.apply(Math, data.map(function (o) { return o.tot_cases; }))
                  const curRange = (curMax - curMin)
                  const newRange = (10 - 1)
                  const cur = allStates.find(s => s.val === geo.id)
                  const cases = data.find(s => cur.id === s.state)
                  const newValue = cases ? (((cases.tot_cases - curMin) * newRange) / curRange) + 1 : 0
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        const { state, tot_cases } = cases;
                        setToolTip(`${state} — ${tot_cases}`);
                      }}
                      onMouseLeave={() => {
                        setToolTip("");
                      }}
                      style={{
                        default: {
                          fill: colorScale(newValue),
                          outline: "none"
                        },
                        hover: {
                          fill: "#F53",
                          outline: "none"
                        },
                        pressed: {
                          fill: "#E42",
                          outline: "none"
                        }
                      }}
                    />
                  )
                }
              })}
            </>
          )}
        </Geographies>
      </ComposableMap>
      <ReactTooltip>{toolTip}</ReactTooltip>
    </div>
  );
};

export default CovidMap;