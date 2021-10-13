package com.usa.ciclo3.ciclo3.web;

import com.usa.ciclo3.ciclo3.modelo.Message;
import com.usa.ciclo3.ciclo3.service.MessageService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


/**
 *
 * @author lilia
 */


@RestController
@RequestMapping("/api/Message")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE })
public class MessageController {
        
        @Autowired
	private MessageService messageService;

	@GetMapping("/all")
	public List<Message> getMessage() {
            return messageService.getAll();

	}

	@GetMapping("/{id}")
	public Optional<Message> getMessage(@PathVariable("id") int id) {
            return messageService.getMessage(id);

	}

	@PostMapping("/save")
	@ResponseStatus(HttpStatus.CREATED)
	public Message save(@RequestBody Message mensaje) {
		return messageService.save(mensaje);
	}
    
}
