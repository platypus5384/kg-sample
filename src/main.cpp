#include <Arduino.h>

#include <ArduinoJson.h>

void setup()
{
    Serial.begin(115200);
}

void loop()
{
    StaticJsonDocument<1024> doc;
    doc["IN0"] = 0.000;
    doc["IN1"] = 0.000;
    doc["IN2"] = 0.000;
    doc["IN3"] = 0.000;
    doc["IN4"] = 0.000;
    doc["IN5"] = 0.000;
    doc["IN6"] = 0.000;
    doc["IN7"] = 0.000;
    doc["IN8"] = 0.000;
    doc["IN9"] = 0.000;
    doc["IN10"] = 0.000;
    doc["IN11"] = 0.000;
    doc["OUT0"] = "L";
    doc["OUT1"] = "L";
    doc["OUT2"] = "L";
    doc["OUT3"] = "L";
    doc["OUT4"] = "L";
    doc["OUT5"] = "L";
    doc["OUT6"] = "L";
    doc["OUT7"] = "L";
    doc["OUT8"] = "L";
    doc["OUT9"] = "L";
    doc["OUT10"] = "L";
    doc["OUT11"] = "L";
    String json;
    serializeJson(doc, json);
    while (true)
    {
        
        Serial.println(json);
    }
}