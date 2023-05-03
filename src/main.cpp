#include <Arduino.h>

#include <ArduinoJson.h>

#define PIN_IN1  13
#define PIN_IN2  14
#define PIN_IN3  27
#define PIN_IN4  33
#define PIN_IN5  32
#define PIN_IN6  35
#define PIN_IN7  34
#define PIN_IN8  39
#define PIN_IN9  36

#define PIN_OUT1  25
#define PIN_OUT2  26
#define PIN_OUT3   2
#define PIN_OUT4   4
#define PIN_OUT5  16
#define PIN_OUT6  17
#define PIN_OUT7  18
#define PIN_OUT8  19
#define PIN_OUT9  21
#define PIN_OUT10 22
#define PIN_OUT11 23



void setup()
{
    Serial.begin(115200);
    pinMode(PIN_IN1, ANALOG);
    pinMode(PIN_IN2, ANALOG);
    pinMode(PIN_IN3, ANALOG);
    pinMode(PIN_IN4, ANALOG);
    pinMode(PIN_IN5, ANALOG);
    pinMode(PIN_IN6, ANALOG);
    pinMode(PIN_IN7, ANALOG);
    pinMode(PIN_IN8, ANALOG);
    pinMode(PIN_IN9, ANALOG);

    pinMode(PIN_OUT1, OUTPUT);
    pinMode(PIN_OUT2, OUTPUT);
    pinMode(PIN_OUT3, OUTPUT);
    pinMode(PIN_OUT4, OUTPUT);
    pinMode(PIN_OUT5, OUTPUT);
    pinMode(PIN_OUT6, OUTPUT);
    pinMode(PIN_OUT7, OUTPUT);
    pinMode(PIN_OUT8, OUTPUT);
    pinMode(PIN_OUT9, OUTPUT);
    pinMode(PIN_OUT10, OUTPUT);
    pinMode(PIN_OUT11, OUTPUT);
}

void loop()
{
    StaticJsonDocument<1024> doc;
    doc["IN1"] = 0;
    doc["IN2"] = 0;
    doc["IN3"] = 0;
    doc["IN4"] = 0;
    doc["IN5"] = 0;
    doc["IN6"] = 0;
    doc["IN7"] = 0;
    doc["IN8"] = 0;
    doc["IN9"] = 0;
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
        doc["IN1"] = analogRead(PIN_IN1);
        doc["IN2"] = analogRead(PIN_IN2);
        doc["IN3"] = analogRead(PIN_IN3);
        doc["IN4"] = analogRead(PIN_IN4);
        doc["IN5"] = analogRead(PIN_IN5);
        doc["IN6"] = analogRead(PIN_IN6);
        doc["IN7"] = analogRead(PIN_IN7);
        doc["IN8"] = analogRead(PIN_IN8);
        doc["IN9"] = analogRead(PIN_IN9);

        
        digitalWrite(PIN_OUT2, HIGH);
        json.clear();
        serializeJson(doc, json);
        Serial.println(json);
        delay(10);
    }
}