package model;

import entities.Point;

import java.util.ArrayList;
import java.util.List;

public class Model {
    private static Model instance = new Model();
    private List<Point> points;

    public static Model getInstance() {
        return instance;
    }
    private Model(){
        points = new ArrayList<>();
    }
    public void add (Point point){
        points.add(point);
    }

    public List<Point> getPoints() {
        return points;
    }
}
