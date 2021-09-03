import variables as var
import pygame
import fonts
import UI

def manage():
    display()

def display():
    var.screen.fill((255, 255, 255))
    var.screen.blit(fonts.title.render('Defense', True, (0, 0, 0)), UI.UI.title_text)
    pygame.display.flip()

def mouse_up():
    var.Game.scene = 'menu'
    pass
