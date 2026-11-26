import AccountVerifyEmail from "@/src/components/emails/VerifyAccount";
import AccountVerifyLogin from "@/src/components/emails/VerifyLogin";
import AccountDeletion from "@/src/components/emails/DeleteAccount";
import AccountChanges from "@/src/components/emails/ChangedAccount";
import { MailTypes } from "../types";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT || 587),
	secure: process.env.SMTP_SECURE === "true",
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS
	}
})

export async function SendEmail({type, reciver, content} : {type: MailTypes, reciver: string, content: string}) {

	if (type === "verifyAccount") await transporter.sendMail({
		from: `SEssentials <${process.env.SMTP_FROM}>`,
		replyTo: `${process.env.SMTP_FROM}`,
		to: reciver,
		subject: "Verify your accounts email.",
		text: `Welcome to SEssentials! Verify your account on this link: ${content}`,
		html: AccountVerifyEmail(content)
	})

	if (type === "verifyLogin") await transporter.sendMail({
		from: `SEssentials <${process.env.SMTP_FROM}>`,
		replyTo: `${process.env.SMTP_FROM}`,
		to: reciver,
		subject: "Verify account login session.",
		text: `The verification code for your login is ${content}. Enter it in the login session you currently have open to confirm it's you and continue signing in.`,
		html: AccountVerifyLogin(content)
	})

	if (type === "deletedAccount") await transporter.sendMail({
		from: `SEssentials <${process.env.SMTP_FROM}>`,
		replyTo: `${process.env.SMTP_FROM}`,
		to: reciver,
		subject: "Your account has been deleted.",
		text: `The account associated with this email address has been deleted, along with its related information, including Minecraft account details and email information.`,
		html: AccountDeletion()
	})

	if (type === "changedAccount") await transporter.sendMail({
		from: `SEssentials <${process.env.SMTP_FROM}>`,
		replyTo: `${process.env.SMTP_FROM}`,
		to: reciver,
		subject: "Your account information has changed.",
		text: `Your account's login details have changed. One or more of the following may have been updated: your email address, username, or password.`,
		html: AccountChanges()
	})
}