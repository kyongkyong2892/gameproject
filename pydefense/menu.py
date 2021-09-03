import variables as var
import pygame
import fonts
import functions as func
import UI

def manage():
    display()

def display():
    var.screen.fill((255, 255, 255))
    var.screen.blit(fonts.title.render('Menu', True, (0, 0, 0)), UI.UI.title_text)
    pygame.draw.rect(var.screen, (0, 0, 0), UI.UI.Menu.adventure_button, 2)
    pygame.draw.rect(var.screen, (0, 0, 0), UI.UI.Menu.extra_button, 2)
    pygame.display.flip()

def mouse_up():
    if func.point_inside_rect(var.Mouse.lx, var.Mouse.ly, UI.UI.Menu.adventure_button[0], UI.UI.Menu.adventure_button[1], UI.UI.Menu.adventure_button[2], UI.UI.Menu.adventure_button[3]):
        game.scene = 'map'

    elif func.point_inside_rect(var.Mouse.lx, var.Mouse.ly, UI.UI.Menu.extra_button[0], UI.UI.Menu.extra_button[1], UI.UI.Menu.extra_button[2], UI.UI.Menu.extra_button[3]):
        game.scene = 'extra_level_select'
