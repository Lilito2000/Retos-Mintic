package com.usa.ciclo3.ciclo3.modelo;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;


/**
 *
 * @author lilia
 */
@Entity
@Table(name="message")
public class Message implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id; //debe ser invisible
        @Column (length = 250)
    	private String messageText;//no superior a 250 caracteres 

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

       public String getText() {
        return messageText;
    }

    public void setText(String text) {
        this.messageText = text;
    }
        
  

    
}
