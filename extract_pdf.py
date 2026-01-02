import sys
import os

try:
    import PyPDF2
    has_pypdf2 = True
except ImportError:
    has_pypdf2 = False

try:
    import pdfplumber
    has_pdfplumber = True
except ImportError:
    has_pdfplumber = False

pdf_path = "src/assets/SA - Individual Services Page Content .pdf"

if not os.path.exists(pdf_path):
    print(f"Error: PDF file not found at {pdf_path}")
    sys.exit(1)

text_content = ""

if has_pdfplumber:
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                text_content += page.extract_text() + "\n\n"
        print(text_content)
    except Exception as e:
        print(f"Error with pdfplumber: {e}", file=sys.stderr)
        if has_pypdf2:
            try:
                with open(pdf_path, 'rb') as file:
                    pdf_reader = PyPDF2.PdfReader(file)
                    for page in pdf_reader.pages:
                        text_content += page.extract_text() + "\n\n"
                print(text_content)
            except Exception as e2:
                print(f"Error with PyPDF2: {e2}", file=sys.stderr)
elif has_pypdf2:
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page in pdf_reader.pages:
                text_content += page.extract_text() + "\n\n"
        print(text_content)
    except Exception as e:
        print(f"Error with PyPDF2: {e}", file=sys.stderr)
        print("Please install PyPDF2 or pdfplumber: pip install PyPDF2 pdfplumber")
else:
    print("Error: No PDF library found. Please install PyPDF2 or pdfplumber: pip install PyPDF2 pdfplumber", file=sys.stderr)

