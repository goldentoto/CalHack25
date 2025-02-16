package com.calhack.cookproj.models;

public class ClassInfo {
    private String name;
    private String day;
    private String time;
    private int duration;
    private int pointValue;

    public ClassInfo() { }

    public ClassInfo(String name, String day, String time, int duration, int pointValue) {
        setName(name);
        setDay(day);
        setTime(time);
        setDuration(duration);
        setPointValue(pointValue);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public int getPointValue() {
        return pointValue;
    }

    public void setPointValue(int pointValue) {
        this.pointValue = pointValue;
    }

}
