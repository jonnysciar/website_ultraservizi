package it.jonnysciar.web_ultraservizi.entities;


import javax.persistence.*;
import java.util.List;

@Entity
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(nullable = false)
    private String nome;
    @Column(nullable = false)
    private String cognome;
    @Column(nullable = false)
    private String email;

    @OneToMany
    private List<Cane> canes;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String name) {
        this.nome = name;
    }

    public String getCognome() {
        return cognome;
    }

    public void setCognome(String surname) {
        this.cognome = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Cane> getCanes() {
        return canes;
    }

    public void setCanes(List<Cane> cani) {
        this.canes = cani;
    }
}
