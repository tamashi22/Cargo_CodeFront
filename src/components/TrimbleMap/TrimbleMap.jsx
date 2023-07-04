import React, { useState, useEffect, useRef } from "react";
import TrimbleMaps from "@trimblemaps/trimblemaps-js";
import MapMenus from "@trimblemaps/trimblemaps-mapmenus";
import { TRIMBLE_API_KEY } from "@/constants/trimble";

const TrimbleMap = React.forwardRef(({ className }) => {
  const [location, setLocation] = useState();
  const mapContainerRef = useRef(null);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);
  useEffect(() => {
    TrimbleMaps.APIKey = TRIMBLE_API_KEY;
    const myMap = new TrimbleMaps.Map({
      container: mapContainerRef.current,
      center: new TrimbleMaps.LngLat(-96, 35),
      zoom: 9,
    });
    const ctrl = new MapMenus({});
    myMap.addControl(ctrl, "top-left");
    myMap.on("load", function () {
      //   myMap.setWeatherRadarVisibility(true);
      //     myMap.set3dBuildingVisibility(true);
      //   myMap.setTrafficVisibility(true);
      //   myMap.setPlacesVisibility(true);
      //   myMap.setPOIVisibility(true);
      //   trafficIncident.addTo(myMap);
      //   truckRestriction.addTo(myMap);
      // Customize your map once loaded
    });
  }, []);

  console.log(location);
  return (
    <>
      <div ref={mapContainerRef} className={className}></div>
    </>
  );
});
export default TrimbleMap;
