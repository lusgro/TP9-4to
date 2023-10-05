﻿using Microsoft.AspNetCore.Mvc;
using TP9.Models;

namespace TP9.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View("Login");
    }

    [HttpPost]
    public IActionResult VerificarLogin(string user, string password) {
        Usuario usuario = BD.Login(user, password);
        if (usuario != null) {
            ViewBag.Usuario = usuario;
            return View("Bienvenido");
        } else {
            ViewBag.Usuario = usuario;
            return View("Bienvenido");
        }
    }

    public IActionResult Registro() {
        return View();
    }

    [HttpPost]
    public IActionResult RegistrarUsuario(Usuario usuario) {
        BD.RegistrarUsuario(usuario);
        return RedirectToAction("Bienvenido", new { user = usuario });
    }

    public IActionResult Olvide() {
        return View();
    }

    [HttpPost]
    public IActionResult RecuperarContraseña(string email, string preguntaSeguridad) {
        string password = BD.RecuperarContraseña(email, preguntaSeguridad);
        if (password != null) {
            ViewBag.Resultado = $"La contraseña es {password}";
            return View("Olvide");
        } else {
            ViewBag.Resultado = "No se encontró el usuario";
            return View("Olvide");
        }
    }
}