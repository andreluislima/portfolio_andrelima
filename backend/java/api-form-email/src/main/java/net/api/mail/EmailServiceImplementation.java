package net.api.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import net.api.mail.dto.MensagemDTO;
import net.api.mail.service.EmailServiceInterface;

public class EmailServiceImplementation implements EmailServiceInterface{

	@Autowired
	private JavaMailSender mailSender;
	
	@Override
	public void enviarEmail(MensagemDTO mensagem) {
		 SimpleMailMessage email = new SimpleMailMessage();
		 
		 email.setFrom(mensagem.getEmail());
		 email.setTo("andrelimag89@gmail.com");
		 email.setSubject("Mensagem de " + mensagem.getNome());
		 email.setText(mensagem.getMensagem());
		 
		 mailSender.send(email);
	}

}
