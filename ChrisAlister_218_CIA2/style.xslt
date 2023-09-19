<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Canine Details</title>
        <style>
          /* CSS for centering the title and full-page table */
          body {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 100vh;
            background-color: #f2f2f2;
            background-image: url(/images/4.jpg);
            background-repeat: no-repeat;
            background-size: cover;
          }
          .navbar {
            background-color: #333;
            overflow: hidden; 
        }
        
        
        .navbar-item {
            float: left; 
            display: block; 
            color: #fff;
            text-align: center; 
            padding: 14px 16px; 
            text-decoration: none; 
        }
        a {
            text-decoration: none; 
            color: white;
        }

        a:hover {
            color: #0056b3;
        }
        
        
        .navbar-item:hover {
            background-color: #ddd; 
            color: #333; 
        }
        
        
        .navbar::after {
            content: "";
            display: table;
            clear: both;
        }

          h1 {
            text-align: center;
            padding: 20px 0;
          }

          table {
            width: 100%;
          }

          table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
          }

          th, td {
            padding: 8px;
            text-align: left;
          }

          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <nav class="navbar">
            <div class="navbar-item"><a href="dogsfetch.html">Home</a></div>
            <div class="navbar-item"><a href="feedback.html">Feedback</a></div>
            <div class="navbar-item"><a href="#">XSLT</a></div>
            <div class="navbar-item"><a href="dogsjson.html">Json</a></div>
        </nav>
        <h1>Canine Details</h1>
        <table>
          <tr>
            <th>Breed</th>
            <th>Color</th>
            <th>Country</th>
          </tr>
          <xsl:for-each select="CanineDetails/Canine">
            <tr>
              <td><xsl:value-of select="Breed"/></td>
              <td><xsl:value-of select="Color"/></td>
              <td><xsl:value-of select="Country"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
