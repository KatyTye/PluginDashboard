export default function AccountVerifyEmail(code: string) {

	return `
		<!doctype html>
		<html>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Verify Email</title>
			</head>
			<body style="margin:0;padding:0;background:#bababa;font-family:Arial,sans-serif;">
				<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#bababa;">
				<tr>
					<td align="center" style="background-color:#00000070;background-image:url('https://sessentials.org/images/frontpage.jpg');background-repeat:no-repeat;background-position:center;background-size:cover;">
					
					<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:525px;background:#ffffff;border-radius:8px;
						overflow: hidden;margin:150px 0;width: 50%;min-width: 315px;">
						<tr>
						<td style="color:#ff5900;padding:24px;text-align:center;">
							<h1 style="font-size:26px;line-height:1.2;margin:0;">Verify Email</h1>
						</td>
						</tr>

						<tr>
						<td style="padding:0 30px;text-align:center;color:#9b9c9c;">
							<p style="margin:0 0 20px 0;font-weight:bold;line-height:1.6;">
								To connect your email address to your account, click the button below to confirm that the address belongs to you and approve linking it.
							</p>

							<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 50px auto;">
							<tr>
								<td bgcolor="#ff5900" style="border-radius:5px;">
								<a href="https://sessentials.org/profile/verify/${code}"
									target="_blank"
									style="display:inline-block;padding:15px 120px;color:#ffffff;text-decoration:none;font-size:20px;font-weight:bold;">
									Verify
								</a>
								</td>
							</tr>
							</table>

							<p style="margin:0;color:#a40000;font-weight:bold;font-size:12px;">
								If you didn't request this, you can ignore this message.
							</p>
						</td>
						</tr>

						<tr>
						<td style="padding:20px;text-align:center;color:#6b7280;font-size:12px;">
							This email was sent automatically.
						</td>
						</tr>
					</table>

					</td>
				</tr>
				</table>
			</body>
		</html>
	`
}