package servlets;

import entities.Point;
import model.Model;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        long timeStart = System.nanoTime();
        PrintWriter out  = resp.getWriter();
        Model model = Model.getInstance();

        try{
            double x = Double.parseDouble(req.getParameter("x"));
            double y = Double.parseDouble(req.getParameter("y"));
            double r = Double.parseDouble(req.getParameter("r"));
            Point point = new Point(x, y, r, new SimpleDateFormat("HH:mm:ss").format(new Date()), String.valueOf((System.nanoTime() - timeStart)/ 1000000d));
            ServletContext servletContext = getServletContext();
            model.add(point);
            servletContext.setAttribute("points", model.getPoints());
            out.println(point.toJson());
        }catch (NumberFormatException e){
            out.println("Some incorrect data");
        }

    }
}
