<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"]; // Retrieve message field

    // Process the data (you can perform any necessary operations here)

    // Email details
    // $to = "ashutosh.tiwari@propertystation.in";
    $to = "leads@m3mgolf-hills.co.in"; 
    $subject = "Saheel Properties Codename Trendy West | Pune West Google lead";
    $messageBody = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message"; // Include message in email body

    // Send email
    $headers = "From: leads@m3mgolf-hills.co.in"; // Replace with the sender's email address
    if (mail($to, $subject, $messageBody, $headers)) {
        
        // Api Code:  start

        // Api Url
        $api_url = 'https://cms.propertystation.in/api/v2/ppc/lead';


        // API Key
        $api_userPublicKey = 'bI1ov1HMJnzEDbrYtebtYqfTC6YNuEL+ylQqGQ3ich+TIkbN5vSdkpx4wAxVzf0w';
        $api_userSecretKey = 'RBAB7LNblF8GbzoV5WHVdtf9BWNZVV/Qx/nIW0L/lS7jjXwIxUQX9/M='; 

        // headers
        $apiheaders = array(
            "public-key: $api_userPublicKey",
            "secret-key: $api_userSecretKey",
            "Content-Type: application/json"
        );

        // form Data
        $postParameter = array(
        'name'=> $name,
        'email'=> $email,
        'mobile_no'=> $phone,
        'message'=> $message,
        'source_id'=>11, // Source Id
        'sub_source_id'=>64,  //Sub Source Id
        'builder_id'=>'137', // Builder Id
        'project_id'=>'571', // Project Id
        );

        // call api
        $encodedData = json_encode($postParameter);
        $curl = curl_init($api_url);
        $data_string = urlencode(json_encode($postParameter));
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt( $curl, CURLOPT_HTTPHEADER, $apiheaders);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $encodedData);
        $result = curl_exec($curl);
        curl_close($curl);


        // Api Code:  End
      header("Location: https://saheelprojects.com/codename-trendy-west/thankyou.html");
        exit();
    } else
    {
        echo "<h2>Error</h2>";
        echo "<p>Sorry, there was an error submitting your form. Please try again later.</p>";
    }
} else {
    // Redirect if accessed directly without form submission
    header("Location:  https://saheelprojects.com/codename-trendy-west/thankyou.html");
    exit();
}
?>
