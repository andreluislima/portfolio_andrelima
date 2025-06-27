package net.api.mail.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.api.mail.dto.MensagemDTO;
import net.api.mail.service.EmailServiceInterface;

@RestController
@RequestMapping("/enviarEmail")
@CrossOrigin(origins = "*")
public class EmailController {

	private EmailServiceInterface emailServiceInterface;
	
	@PostMapping
	public String enviarMensagem(@RequestBody MensagemDTO mensagem) {
		emailServiceInterface.enviarEmail(mensagem);
		return "Mensagem enviada com sucesso";
	}
}
