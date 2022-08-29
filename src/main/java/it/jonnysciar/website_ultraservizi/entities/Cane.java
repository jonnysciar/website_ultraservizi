package it.jonnysciar.website_ultraservizi.entities;

import javax.persistence.*;

@Entity
public class Cane {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;

    @Column(nullable = false)
    private String razza;

    @ManyToOne
    private Persona padrone;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRazza() {
        return razza;
    }

    public void setRazza(String razza) {
        this.razza = razza;
    }

    public Persona getPadrone() {
        return padrone;
    }

    public void setPadrone(Persona padrone) {
        this.padrone = padrone;
    }
}
