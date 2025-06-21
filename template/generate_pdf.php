<!DOCTYPE html>
<html>
<head>
    <title>Create PDF</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
</head>
<body>
    <h1>Create PDF</h1>
    <button id="generatePdfButton">Generate PDF</button>

    <script>
        document.getElementById("generatePdfButton").addEventListener("click", function () {
            // Create a new PDF document
            const doc = new jsPDF();

            // Add content to the PDF
            doc.text("Hello, this is a sample PDF document.", 10, 10);

            // Save or download the PDF
            doc.save('sample.pdf');
        });
    </script>
</body>
</html>

