<?php
// Croxley Tyres contact form handler (runs on Namecheap shared hosting).
// Receives the form as JSON and emails it to the shop.

$TO_EMAIL = 'croxleytyres@gmail.com';

header('Content-Type: application/json');

function reply($code, $success, $message) {
    http_response_code($code);
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    reply(405, false, 'Method not allowed');
}

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    reply(400, false, 'Please check your form data');
}

$clean = function ($v) { return trim(str_replace(["\r", "\n"], ' ', (string)($v ?? ''))); };
$name    = $clean($data['name'] ?? '');
$email   = $clean($data['email'] ?? '');
$phone   = $clean($data['phone'] ?? '');
$message = trim((string)($data['message'] ?? ''));

if (mb_strlen($name) < 2 || !filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($message) < 10
    || mb_strlen($name) > 200 || mb_strlen($phone) > 50 || mb_strlen($message) > 5000) {
    reply(400, false, 'Please check your form data');
}

// Send from an address on this domain so Gmail doesn't flag it as spam.
$host = preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? 'localhost');
$host = preg_replace('/[^a-z0-9.\-]/i', '', $host);
$from = 'noreply@' . $host;

$subject = 'New website enquiry from ' . $name;
$body  = "New message from the Croxley Tyres website\n\n";
$body .= "Name:  $name\n";
$body .= "Email: $email\n";
$body .= "Phone: " . ($phone !== '' ? $phone : 'not given') . "\n\n";
$body .= "Message:\n$message\n";

$headers  = "From: Croxley Tyres Website <$from>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($TO_EMAIL, $subject, $body, $headers, '-f' . $from)) {
    reply(200, true, 'Thank you for your message! We will get back to you soon.');
}
reply(500, false, 'Sorry, there was an error sending your message. Please try again or call us on 01923 710323.');
