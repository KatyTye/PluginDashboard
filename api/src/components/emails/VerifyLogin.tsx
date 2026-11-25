export default function AccountVerifyLogin(code: string) {

	return `
		<!doctype html>
		<html>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Login Code</title>
			</head>
			<body style="margin:0;padding:0;background:#bababa;font-family:Arial,sans-serif;">
				<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#bababa;">
					<tr>
						<td align="center" style="background-color:#00000070;background-image:url('https://sessentials.org/images/frontpage.jpg');background-repeat:no-repeat;background-position:center;background-size:cover;">
							<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:525px;background:#ffffff;border-radius:8px;
								overflow: hidden;margin:150px 0;width: 50%;min-width: 315px;">
								
								<tr>
									<td style="color:#ff5900;padding:24px;text-align:center;">
										<h1 style="font-size:26px;line-height:1.2;margin:0;">Login Code</h1>
									</td>
								</tr>

								<tr>
									<td style="padding:0 30px;text-align:center;color:#9b9c9c;">
										<p style="margin:0 0 20px 0;font-weight:bold;line-height:1.6;">
											Below is the verification code for your login. Enter it in the login session you currently have open to confirm it's you and continue signing in. For your security, don't share this code with anyone. 
										</p>

										<p style="display:inline-block;padding:15px 120px;color:white;text-decoration:none;font-size:20px;font-weight:bold;background-color: #868686;
											border-radius: 5px;">
											${code}
										</p>

										<p style="margin:0;color:#a40000;font-weight:bold;font-size:12px;margin-top: 36px;">
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