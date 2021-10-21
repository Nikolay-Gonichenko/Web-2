<%@ page import="entities.Point" %>
<%@ page import="java.util.*" %>
<%--
  Created by IntelliJ IDEA.
  User: Николай
  Date: 19.10.2021
  Time: 16:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <title>Lab2</title>
    <style>
        body {
            background-color: purple;
            background-repeat: no-repeat;
            background-size: cover;

        }

        #header {
            color: orangered;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-size: large;
        }

        #params p, input, div {
            color: white;
        }

        #main_table {
            text-align: center;
            border-spacing: 30px 0px;
        }

        #params {
            text-align: left;
        }

        #results {
            border: 1px black;
            color: white;
            background: #dc0;
            border-spacing: 10px;
        }

        input {
            color: black;

        }

        #y_value {
            width: 100px;
        }

        button:hover {
            color: red;
        }
    </style>
</head>
<body onload="canvasInit(2.5)">
<table id="main_table">
    <tr>
        <td colspan="2"><p id="header">Гониченко Николай. P3232. 32876</p></td>
    </tr>
    <tr>
        <td id="params">
            <form method="GET" action="" id="form_send">
                <p class="x_radio">X:
                    <input type="radio" name="x_value" value="-4">-4
                    <input type="radio" name="x_value" value="-3">-3
                    <input type="radio" name="x_value" value="-2">-2
                    <input type="radio" name="x_value" value="-1">-1
                    <input type="radio" name="x_value" value="0">0
                    <input type="radio" name="x_value" value="1">1
                    <input type="radio" name="x_value" value="2">2
                    <input type="radio" name="x_value" value="3">3
                    <input type="radio" name="x_value" value="4">4
                </p>
                <p>Y(-5..5):
                    <input type="text" id="y_value" onkeyup="checkY()" value="">
                </p>
                <p>R:
                    <input type="button" name="r_value" value="1" onclick="press(this)">
                    <input type="button" name="r_value" value="1.5" onclick="press(this)">
                    <input type="button" name="r_value" value="2" onclick="press(this)">
                    <input type="button" name="r_value" value="2.5" onclick="press(this)">
                    <input type="button" name="r_value" value="3" onclick="press(this)">
                </p>
                <button style="width: 100px; height: 30px;" type="submit" >
                    Отправить
                </button>
            </form>
        </td>
        <td>
            <canvas id="cns" width="310px" height="310px">

            </canvas>

        </td>
    </tr>
    <tr>
        <td></td>
        <td>
            <table id="results">
                <tbody>
                <tr>
                    <td class="tableWithBorder">X</td>
                    <td class="tableWithBorder">Y</td>
                    <td class="tableWithBorder">R</td>
                    <td class="tableWithBorder">Результат</td>
                    <td class="tableWithBorder">Время отправки</td>
                    <td class="tableWithBorder">Время работы сервера (мс)</td>
                </tr>
                <%
                    List<Point> points = (List<Point>) request.getServletContext().getAttribute("points");
                    if (points!=null){
                        for (int i=0;i< points.size();i++){
                            out.println("<tr>");
                            out.println("td class=\"tableWithBorder\""+points.get(i).getX()+"</td>");
                            out.println("td class=\"tableWithBorder\""+points.get(i).getY()+"</td>");
                            out.println("td class=\"tableWithBorder\""+points.get(i).getR()+"</td>");
                            out.println("td class=\"tableWithBorder\""+points.get(i).isResult()+"</td>");
                            out.println("td class=\"tableWithBorder\""+points.get(i).getTimeOfSending()+"</td>");
                            out.println("td class=\"tableWithBorder\""+points.get(i).getTimeOfExecuting()+"</td>");
                        }
                    }
                %>
                </tbody>
            </table>
        </td>
    </tr>
</table>
<script src="jquery-3.6.0.min.js"></script>
<script src="canvas.js"></script>
<script src="mainJS.js"></script>
</body>
</html>
