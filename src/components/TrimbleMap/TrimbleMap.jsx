import React, { useState, useEffect, useRef } from "react";
import TrimbleMaps from "@trimblemaps/trimblemaps-js";
import MapMenus from "@trimblemaps/trimblemaps-mapmenus";
import { TRIMBLE_API_KEY_2 } from "@/constants/trimble";

const TrimbleMap = React.forwardRef(
  ({
    className,
    //rest information about order
  }) => {
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
    console.log(location); //my current position;
    useEffect(() => {
      TrimbleMaps.APIKey = TRIMBLE_API_KEY_2;
      const myMap = new TrimbleMaps.Map({
        container: mapContainerRef.current,
        center: new TrimbleMaps.LngLat(-74.566234, 40.49944), //center position pass truck current position
        zoom: 10,
      });

      const myRoute = new TrimbleMaps.Route({
        routeId: "myRoute",
        stops: [
          new TrimbleMaps.LngLat(-74.566234, 40.49944),
          new TrimbleMaps.LngLat(-74.528542, 40.38668), //stop coordinate
          new TrimbleMaps.LngLat(-74.629749, 40.26118),
        ],
      });
      const ctrl = new MapMenus({});
      myMap.addControl(ctrl, "top-left");
      var point = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              name: "Marlen`s Order to Miami", //order properties
            },
            geometry: {
              type: "Point",
              coordinates: [-74.5455, 40.38668], //truck position
            },
          },
        ],
      };

      myMap.on("load", function () {
        myRoute.addTo(myMap);
        myMap.addSource("point", {
          type: "geojson",
          data: point,
        });
        myMap.addLayer({
          id: "point",
          source: "point",
          type: "symbol",
          layout: {
            "icon-image": "truck-fill-black",
            "icon-size": 1.5,
            "icon-allow-overlap": true,
            "icon-keep-upright": true,
          },
        });
        // Listen for clicks on the point layer
        myMap.on("click", "point", function (evt) {
          const popupLocation = evt.features[0].geometry.coordinates.slice();
          const popupContent = evt.features[0].properties.name;

          new TrimbleMaps.Popup()
            .setLngLat(popupLocation)
            .setHTML(popupContent)
            .addTo(myMap);
        });

        // Change cursor when hovering over a feature on the points layer
        myMap.on("mouseenter", "point", function () {
          myMap.getCanvas().style.cursor = "pointer";
        });

        // Change cursor back
        myMap.on("mouseleave", "point", function () {
          myMap.getCanvas().style.cursor = "";
        });

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
  }
);
export default TrimbleMap;
