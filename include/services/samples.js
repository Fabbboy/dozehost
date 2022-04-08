class samples{
    getErrorPage(){
        return "<!DOCTYPE html>\n" +
            "<html lang=\"en\">\n" +
            "<head>\n" +
            "    <meta charset=\"UTF-8\">\n" +
            "    <title>404</title>\n" +
            "</head>\n" +
            "<body>\n" +
            "  <h1 class=\"title\">404 page not found</h1>\n" +
            "  <tt>You requested:</tt>\n" +
            "  <br>\n" +
            "  <br>\n" +
            "  <tt id=\"address\"></tt>\n" +
            "  <br>\n" +
            "  <br>\n" +
            "  <div class=\"rem\"><a>The page you were looking for was not found. Maybe the page doesn't exist anymore</a><br><a>Otherwise, try again or contact the website administrator</a></div>\n" +
            "</body>\n" +
            "</html>\n" +
            "\n" +
            "\n" +
            "<style>\n" +
            "    /*set font-family of all texts to helvetica, arial, helvetica*/\n" +
            "    * {\n" +
            "        font-family: helvetica, arial, helvetica,serif;\n" +
            "    }\n" +
            "    /*place title in the x-middle of the screen*/\n" +
            "    .title {\n" +
            "        position: absolute;\n" +
            "        top: 10%;\n" +
            "        left: 50%;\n" +
            "        transform: translate(-50%, -50%);\n" +
            "    }\n" +
            "    /*put all tt under the title*/\n" +
            "    tt{\n" +
            "        position: absolute;\n" +
            "        top: 20%;\n" +
            "        left: 50%;\n" +
            "        transform: translate(-50%, -50%);\n" +
            "    }\n" +
            "    #address{\n" +
            "        position: absolute;\n" +
            "        top: 25%;\n" +
            "        left: 56%;\n" +
            "        transform: translate(-50%, -50%);\n" +
            "    }\n" +
            "    /*put .rem under the address and put a red box arround it*/\n" +
            "    .rem{\n" +
            "        position: absolute;\n" +
            "        top: 34%;\n" +
            "        left: 52%;\n" +
            "        transform: translate(-50%, -50%);\n" +
            "        border: 1px solid red;\n" +
            "        padding: 10px;\n" +
            "    }\n" +
            "    /*make all css takes media query */\n" +
            "    @media screen and (max-width: 1100px) {\n" +
            "        .title {\n" +
            "            top: 10%;\n" +
            "            left: 50%;\n" +
            "            transform: translate(-50%, -50%);\n" +
            "        }\n" +
            "        tt{\n" +
            "            top: 20%;\n" +
            "            left: 50%;\n" +
            "            transform: translate(-50%, -50%);\n" +
            "        }\n" +
            "        #address{\n" +
            "            top: 30%;\n" +
            "            left: 50%;\n" +
            "            transform: translate(-50%, -50%);\n" +
            "        }\n" +
            "        .rem{\n" +
            "            top: 50%;\n" +
            "            left: 50%;\n" +
            "            transform: translate(-50%, -50%);\n" +
            "        }\n" +
            "    }\n" +
            "</style>\n" +
            "\n" +
            "<script>\n" +
            "    //get the address of the page that was requested and put it in the tt\n" +
            "    document.getElementById(\"address\").innerHTML = window.location.href;\n" +
            "</script>"
    }
}

module.exports = samples;