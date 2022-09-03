package it.jonnysciar.website_ultraservizi.controllers;

import org.springframework.web.bind.annotation.*;

@RestController // This means that this class is a Controller
@RequestMapping(path="/api") // This means URL's start with /demo (after Application path)
public class MainController {

    @GetMapping("/test")
    public String test() {
        return "RestAPI work!";
    }
}