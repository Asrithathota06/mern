import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.xml.sax.*;
import java.io.File;

public class DTDVal {
    public static void main(String[] args) {
        try {
            DocumentBuilderFactory f = DocumentBuilderFactory.newInstance();
            f.setValidating(true);
            DocumentBuilder b = f.newDocumentBuilder();
            b.setErrorHandler(new ErrorHandler() {
                public void warning(SAXParseException e) {
                    System.err.println("Warning: " + e.getMessage());
                }
                public void error(SAXParseException e) {
                    System.err.println("Error: " + e.getMessage());
                }
                public void fatalError(SAXParseException e) {
                    System.err.println("Fatal Error: " + e.getMessage());
                }
            });
            b.parse(new File("bookstore.xml"));
            System.out.println("DTD Validation Completed Successfully ✔");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}