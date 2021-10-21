package entities;

public class Point {
    private final double x;
    private final double y;
    private final double r;
    private final boolean result;
    private final String timeOfSending;
    private final String timeOfExecuting;

    public Point(double x, double y, double r, String timeOfSending, String timeOfExecuting) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.timeOfSending = timeOfSending;
        this.timeOfExecuting = timeOfExecuting;
        this.result = checkPoint(x,y,r);
    }

    private boolean checkPoint(double x, double y, double r) {
        return (x>=-r && x<=0 && y>=0 && y<=r) ||
                (x*x +y*y <= r*r && x<=0 && y<=0) ||
                (y>=x-r && y<=0 && y>=-r && x>=0 && x<=r/2) ;
    }

    public boolean isResult() {
        return result;
    }

    public String toJson() {
        return"[[" +
                "\"" + x + "\""+',' +
                "\"" + y + "\""+',' +
                "\"" + r + "\""+',' +
                "" + result + ""+',' +
                "\"" + timeOfSending + "\""+',' +
                "\"" + timeOfExecuting + "\"" +
                "]]";
    }


    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public String getTimeOfSending() {
        return timeOfSending;
    }

    public String getTimeOfExecuting() {
        return timeOfExecuting;
    }
}
